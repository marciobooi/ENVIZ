import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../styles/modal.css";

const CloseIcon = () => (
    <svg
        className="ecl-icon ecl-icon--m ecl-button__icon"
        focusable="false"
        aria-hidden="false"
        viewBox="0 0 24 24"
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);

const ModalComponent = ({
    isOpen,
    modalTitle = "Modal title",
    bodyContent = "Scrollable content goes here.",
    onClose,
    onSubmit,
    isLoading,
}) => {
    const { t } = useTranslation();
    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);

    useEffect(() => {
        const currentModal = modalRef.current;

        if (isOpen && currentModal) {
            // Store the previously focused element
            previousActiveElement.current = document.activeElement;

            // Show the modal programmatically
            currentModal.showModal();

            // Trap focus inside the modal
            const focusableElements = currentModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            const trapFocus = (e) => {
                if (e.key === "Tab") {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable.focus();
                        }
                    }
                }
                if (e.key === "Escape") {
                    const openDropdown = currentModal.querySelector('.ecl-select__multiple-dropdown[style*="display: block"]');
                    if (!openDropdown) {
                        handleClose();
                    }
                }
            };

            currentModal.addEventListener("keydown", trapFocus);

            return () => {
                currentModal.close();
                currentModal.removeEventListener("keydown", trapFocus);

                // Restore focus to the previously active element
                if (previousActiveElement.current) {
                    previousActiveElement.current.focus();
                }
            };
        }
    }, [isOpen]);

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
        handleClose();
    };

    return (

        <dialog
            ref={modalRef}
            id="modal-example"
            data-ecl-auto-init="Modal"
            data-ecl-modal-toggle="modal-toggle"
            aria-modal="true"
            className={`ecl-modal ecl-modal--full ${isOpen ? "is-open" : ""}`}
            aria-labelledby="modal-example-header"
        >
            <ToastContainer position="top-center" autoClose={3000} closeButton="true" />
            <div className="ecl-modal__container">
                <div className="ecl-modal__content ecl-container">
                    <header className="ecl-modal__header">
                        <div className="ecl-modal__header-content" id="modal-example-header">
                            {modalTitle}
                        </div>
                        <button
                            className="ecl-button ecl-button--tertiary ecl-modal__close"
                            type="button"
                            data-ecl-modal-close=""
                            onClick={handleClose}
                            aria-label={t("modal.aria.closeModal")}
                        >
                            <span className="ecl-button__container">
                                <CloseIcon data-ecl-label="true" aria-label={t("modal.close")} />
                            </span>
                        </button>
                    </header>

                    <div className="ecl-modal__body">{bodyContent}</div>

                    <footer className="ecl-modal__footer">
                        <div className="ecl-modal__footer-content">
                            <button
                                className="ecl-button ecl-button--secondary ecl-modal__button"
                                type="button"
                                data-ecl-modal-close=""
                                onClick={handleClose}
                                disabled={isLoading}
                                aria-label={t("modal.aria.closeModal")}
                            >
                                {t("modal.close")}
                            </button>
                            <button
                                className="ecl-button ecl-button--primary ecl-modal__button"
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isLoading}
                                aria-label={t("modal.aria.submitModal")}
                            >
                                {isLoading ? (
                                    <span className="ecl-button__loading">
                                        <span className="ecl-spinner ecl-spinner--inverted" />
                                        {t("common.loading")}
                                    </span>
                                ) : (
                                    t("modal.submit")
                                )}
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </dialog>
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalTitle: PropTypes.string,
    bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default ModalComponent;
