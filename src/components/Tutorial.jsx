import { useEffect, useState, useRef } from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from 'react-joyride';
import { useTranslation } from 'react-i18next';
import { useTutorial } from '../utils/tutorialUtils';
import getTutorialSteps from '../config/tutorialSteps';
import '../styles/tutorial.css';

const Tutorial = () => {
    const { t } = useTranslation();
    const { isTutorialOpen, endTutorial } = useTutorial();
    const steps = getTutorialSteps(t);
    const [stepIndex, setStepIndex] = useState(0); // Track the current step index
    const [joyrideKey, setJoyrideKey] = useState(0); // Force Joyride to reinitialize
    const lastFocusedElement = useRef(null);
    const tooltipRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);

    // Focus trap effect
    useEffect(() => {
        if (!isTutorialOpen) return;

        const trapFocus = (e) => {
            if (!tooltipRef.current) return;

            const focusableElements = tooltipRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusableElements.length === 0) return;

            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                trapFocus(e);
            } else if (e.key === 'Escape') {
                endTutorial();
            }
        };

        const observeTooltip = () => {
            const observer = new MutationObserver(() => {
                const tooltip = document.querySelector('.react-joyride__tooltip');
                if (tooltip) {
                    tooltipRef.current = tooltip;
                    const focusable = tooltip.querySelector(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (focusable) focusable.focus();
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            return () => observer.disconnect();
        };

        document.addEventListener('keydown', handleKeyDown);
        const disconnectObserver = observeTooltip();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            disconnectObserver();
        };
    }, [isTutorialOpen, endTutorial, stepIndex]);

    useEffect(() => {
        if (isTutorialOpen) {
            setStepIndex(0); // Reset to the first step
            setJoyrideKey((prevKey) => prevKey + 1); // Force Joyride to restart
            lastFocusedElement.current = document.activeElement;
        } else if (lastFocusedElement.current) {
            lastFocusedElement.current.focus();
        }
    }, [isTutorialOpen]);

    const announceToScreenReader = (message) => {
        const announcement = document.getElementById('tutorial-announcement');
        if (announcement) {
            announcement.textContent = message;
        }
    };

    const handleJoyrideCallback = (data) => {
        const { action, status, index, type } = data;

        // Update currentStep whenever the step changes
        setCurrentStep(index + 1);

        // Handle Back button click
        if (action === ACTIONS.PREV) {
            setStepIndex(Math.max(0, index - 1));
            setJoyrideKey((prevKey) => prevKey + 1);
        }

        // Handle Next button click and update stepIndex
        if (action === ACTIONS.NEXT) {
            setStepIndex(index + 1);
            setJoyrideKey((prevKey) => prevKey + 1);
        }

        // End tutorial on finish/skip
        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status) || action === ACTIONS.CLOSE) {
            endTutorial();
        }

        // Announce current step content
        if (type === EVENTS.STEP_AFTER && steps[index]) {
            const announcement = `Step ${index + 1} of ${steps.length}: ${steps[index].content}`;
            announceToScreenReader(announcement);
        }

        // Handle missing targets
        if (type === EVENTS.TARGET_NOT_FOUND) {
            announceToScreenReader(t('tutorial.targetNotFound'));
        }
    };

    const getNextLabelWithProgress = () => {
        const translatedNext = t('tutorial.next');
        return `${translatedNext} (${stepIndex} / ${steps.length})`;
    };

    return (
        <>
            {/* Live region for screen reader announcements */}
            <div
                id="tutorial-announcement"
                role="status"
                aria-live="polite"
                className="sr-only"
            />
            <Joyride
                key={joyrideKey}
                steps={steps}
                run={isTutorialOpen}
                stepIndex={stepIndex}
                continuous
                showProgress
                showSkipButton
                scrollToFirstStep={false}
                disableScrolling={true}
                spotlightPadding={10}
                scrollOffset={0}
                floaterProps={{
                    hideArrow: false,
                    offset: 16,
                    disableAnimation: true,
                }}
                styles={{
                    options: {
                        zIndex: 1000,
                        primaryColor: '#007BFF',
                        textColor: '#333',
                    },
                    spotlight: {
                        borderRadius: '4px',
                    },
                    tooltip: {
                        borderRadius: '4px',
                    },
                    buttonNext: {
                        backgroundColor: " var(--c-p)",
                        border: "0 solid var(--c-p)",
                        color: "#fff",
                        // padding: "calc(var(--s-xs)) calc(var(--s-m))"
                    },
                    buttonSkip: {
                        backgroundColor: "var(--c-p-10)",
                        borderColor: "var(--c-d)",
                        color: "var(--c-d)",
                        padding: "16px 8px",
                        borderRadius: "4px"
                    },
                    buttonBack: {
                        backgroundColor: "#fff",
                        border: "2px solid var(--c-p)",
                        color: "var(--c-p)",
                        // padding: "calc(var(--s-xs)) calc(var(--s-m))"
                    },
                }}
                locale={{
                    back: t('tutorial.back'),
                    close: t('tutorial.close'),
                    last: t('tutorial.last'),
                    skip: t('tutorial.skip'),
                    nextLabelWithProgress: getNextLabelWithProgress(currentStep),
                }}
                callback={handleJoyrideCallback}
            />
            {isTutorialOpen && (
                <div
                    aria-hidden="true"
                    className="tutorial-overlay"
                    onClick={endTutorial}
                />
            )}
        </>
    );
};

export default Tutorial;
