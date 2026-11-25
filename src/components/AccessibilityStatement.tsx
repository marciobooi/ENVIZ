import type { ReactNode } from 'react'
import type { AccessibilityStatementConfig, StatementSection, StatementText } from '../accessibility/statementConfig'

interface AccessibilityStatementProps {
  config: AccessibilityStatementConfig
  /** Where "Back to the tool" goes. */
  backHref: string
}

const COMPLIANCE_LABEL = {
  fully: 'fully compliant',
  partially: 'partially compliant',
  not: 'not compliant',
} as const

const EN_301_549_URL = 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf'
const WCAG_URL = 'https://www.w3.org/TR/WCAG21/'
const WCAG_STANDARDS_URL = 'https://www.w3.org/WAI/standards-guidelines/wcag/'

/** Same look as the external-link icon on the Eurostat accessibility pages. */
function ExternalIcon() {
  return (
    <svg
      className="ecl-icon ecl-icon--2xs ecl-link__icon ecl-u-ml-xs"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={{ marginInlineEnd: 0 }}
    >
      <path d="M19 20H5c-.6 0-1-.5-1-1V5c0-.6.4-1 1-1h6c.6 0 1-.5 1-1s-.4-1-1-1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7c0-.6-.5-1-1-1s-1 .4-1 1v6c0 .5-.5 1-1 1M14 3c0 .5.4 1 1 1h3.6l-6.3 6.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L20 5.4V9c0 .6.5 1 1 1s1-.4 1-1V3c0-.5-.5-1-1-1h-6c-.5 0-1 .5-1 1" />
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg className="a11y-pdf-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path fill="#d3281e" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path fill="#fff" fillOpacity=".45" d="M14 2l6 6h-4a2 2 0 0 1-2-2z" />
      <path
        fill="#fff"
        d="M7 15.5c1.8-.4 3.4-2.3 4.1-4.4-.3-1-.4-2 0-2.6.4-.5 1-.2 1.1.4.1.9-.1 1.8-.5 2.7.6 1 1.5 1.8 2.5 2.1.8-.1 1.8-.2 1.9.5.1.9-1.3.9-2.3.6-1-.3-2-.3-3.1.1-.6 1.1-1.4 1.9-2.2 2.1-.9.2-1.4-.7-.5-1.5zm1 .7c.4-.1.9-.6 1.3-1.3-.6.3-1.2.7-1.3 1.3z"
      />
    </svg>
  )
}

/** Link to an external document: icon after the last word (kept together so it never wraps alone). */
function IconLink({ href, children }: { href: string; children: string }) {
  const cut = children.lastIndexOf(' ')
  const head = cut === -1 ? '' : children.slice(0, cut + 1)
  const tail = cut === -1 ? children : children.slice(cut + 1)
  return (
    <a className="ecl-link ecl-link--icon" href={href} target="_blank" rel="noopener noreferrer">
      <span className="ecl-link__label">
        {head}
        <span className="text-nowrap">
          {tail}
          <ExternalIcon />
        </span>
      </span>
      <span className="ecl-u-sr-only"> (opens in new tab)</span>
    </a>
  )
}

function NewTabLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ecl-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="ecl-u-sr-only"> (opens in new tab)</span>
    </a>
  )
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return paragraphs.map((text) => <p key={text} className="ecl-u-type-paragraph">{text}</p>)
}

function List({ items }: { items?: string[] }) {
  if (!items?.length) return null
  return (
    <ul className="ecl-unordered-list">
      {items.map((item) => <li key={item} className="ecl-unordered-list__item">{item}</li>)}
    </ul>
  )
}

function BackButton({ href }: { href: string }) {
  return (
    <div className="a11y-actions">
      <a className="ecl-button ecl-button--primary" href={href}>
        <span className="ecl-button__container">
          <span className="ecl-button__label" data-ecl-label="true">Back to the tool</span>
        </span>
      </a>
    </div>
  )
}

/** Plain heading + content, as on the Eurostat accessibility pages (no section wrapper, no divider). */
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  const anchor = `a11y-${id}`
  return (
    <>
      <h2 className="ecl-u-type-heading-2" id={anchor}>{title}</h2>
      {children}
    </>
  )
}

function TextSection({ id, title, text }: { id: string; title: string; text: StatementText }) {
  return (
    <Section id={id} title={title}>
      <Paragraphs paragraphs={text.paragraphs} />
      <List items={text.items} />
    </Section>
  )
}

/**
 * English-only accessibility statement, same structure as the Eurostat accessibility pages:
 * h1 "Accessibility", intro paragraphs, plain h2 sections (no "On this page" index).
 */
export function AccessibilityStatement({ config, backHref }: AccessibilityStatementProps) {
  const { productionUrl, feedback } = config

  return (
    <div
      id="accessibilityView"
      className="a11y-statement"
      lang="en"
      role="region"
      aria-labelledby="a11y-statement-title"
    >
      <div className="a11y-wrapper">
        <BackButton href={backHref} />

        <div className="ecl-page-header__info">
          <h1 className="ecl-page-header__title ecl-u-mt-none ecl-u-mb-l" id="a11y-statement-title" tabIndex={-1}>
            Accessibility
          </h1>
        </div>

        <div className="a11y-intro">
          <p className="ecl-u-type-paragraph">
            This statement applies to content published on the domain{' '}
            <NewTabLink href={productionUrl}>{productionUrl}</NewTabLink>.
          </p>
          <p className="ecl-u-type-paragraph">
            It does not apply to other content or websites published on any of its subdomains. These websites and
            their content will have their own specific accessibility statement.
          </p>
          <p className="ecl-u-type-paragraph">
            This interactive tool is managed by Eurostat. It is designed to be used by as many people as possible,
            including people with disabilities.
          </p>
          <p className="ecl-u-type-paragraph">You should be able to:</p>
          <List items={config.youShouldBeAbleTo} />
          <p className="ecl-u-type-paragraph">
            This interactive tool is designed to comply with the <PdfIcon />{' '}
            <IconLink href={EN_301_549_URL}>technical standard for websites and mobile apps, EN 301 549, v.3.2.1</IconLink>.
            This closely follows level ‘AA’ of the{' '}
            <IconLink href={WCAG_URL}>Web Content Accessibility Guidelines (WCAG) version 2.1</IconLink>.
          </p>
        </div>

        <div className="a11y-sections">
          <Section id="compliance-status" title="Compliance status">
            <p className="ecl-u-type-paragraph">
              This interactive tool is <strong>{COMPLIANCE_LABEL[config.compliance]}</strong> with <PdfIcon />{' '}
              <IconLink href={EN_301_549_URL}>technical standard EN 301 549 v.3.2.1</IconLink> and the{' '}
              <IconLink href={WCAG_STANDARDS_URL}>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</IconLink>.
              See ‘<a className="ecl-link" href="#a11y-non-accessible-content">Non-accessible content</a>’ below for
              more details.
            </p>
            <p className="ecl-u-type-paragraph">The interactive tool was last tested on {config.lastTested}.</p>
          </Section>

          <TextSection
            id="preparation-of-this-statement"
            title="Preparation of this statement"
            text={config.preparation}
          />

          <Section id="feedback" title="Feedback">
            <p className="ecl-u-type-paragraph">
              We welcome your feedback on the accessibility of the Eurostat website. Please let us know if you
              encounter accessibility barriers:
            </p>
            <ul className="ecl-unordered-list">
              {feedback.phone && (
                <li className="ecl-unordered-list__item">
                  Phone: <a className="ecl-link" href={`tel:${feedback.phone.replace(/\s+/g, '')}`}>{feedback.phone}</a>
                </li>
              )}
              {feedback.email && (
                <li className="ecl-unordered-list__item">
                  E-mail: <a className="ecl-link" href={`mailto:${feedback.email}?subject=Accessibility`}>{feedback.email}</a>
                </li>
              )}
              {feedback.contactFormUrl && (
                <li className="ecl-unordered-list__item">
                  Contact form:{' '}
                  <NewTabLink href={feedback.contactFormUrl}>{feedback.contactFormLabel ?? 'contact form'}</NewTabLink>
                </li>
              )}
            </ul>
            {feedback.responseTime && <p className="ecl-u-type-paragraph">{feedback.responseTime}</p>}
          </Section>

          <TextSection
            id="compatibility-with-browsers-and-assistive-technology"
            title="Compatibility with browsers and assistive technology"
            text={config.compatibility}
          />
          <TextSection id="technical-specifications" title="Technical specifications" text={config.technicalSpecifications} />
          <TextSection id="non-accessible-content" title="Non-accessible content" text={config.nonAccessibleContent} />

          {config.extraSections?.map((section: StatementSection) => (
            <TextSection key={section.id} id={section.id} title={section.title} text={section} />
          ))}
        </div>

        <BackButton href={backHref} />
      </div>
    </div>
  )
}
