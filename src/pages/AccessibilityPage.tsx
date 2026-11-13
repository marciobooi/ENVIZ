import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toolHref } from '../accessibility/mode'
import { statementConfig } from '../accessibility/statementConfig'
import { AccessibilityStatement } from '../components/AccessibilityStatement'
import '../styles/accessibility.css'

/** `?accessibility`: the same app shell (banner + footer) with the statement instead of the tool. */
export function AccessibilityPage() {
  const { t, i18n } = useTranslation()


  useEffect(() => {
    document.title = `Accessibility statement - ${statementConfig.toolName} - Eurostat`
  }, [])

  return (
    <>
    <main id="main-content" className="visualization-shell">
        <AccessibilityStatement config={statementConfig} backHref={toolHref(i18n.resolvedLanguage ?? 'en')} />
      </main>
    </>
  )
}
