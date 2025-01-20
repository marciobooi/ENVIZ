import PropTypes from "prop-types";

const ModalComponent = ({
    isOpen,
    modalTitle = "Modal title",
    bodyContent = "Scrollable content goes here.",
    onClose,
    onSubmit,
}) => {
    if (!isOpen) return null; // Render nothing if the modal is not open

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
        handleClose();
    };

    return (
        <div
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            className="ecl-modal ecl-modal--l"
        >
            <div className="ecl-modal__container">
                <div className="ecl-modal__content ecl-container">
                    <header className="ecl-modal__header">
                        <div
                            className="ecl-modal__header-content"
                            id="modal-title"
                        >
                            {modalTitle}
                        </div>
                        <button
                            className="ecl-button ecl-button--tertiary ecl-modal__close ecl-button--icon-only"
                            type="button"
                            onClick={handleClose}
                        >
                            <span className="ecl-button__container">
                                <span
                                    className="ecl-button__label"
                                    data-ecl-label="true"
                                >
                                    Close
                                </span>
                                <svg
                                    className="ecl-icon ecl-icon--m ecl-button__icon"
                                    focusable="false"
                                    aria-hidden="true"
                                    data-ecl-icon=""
                                >
                                    <use xlinkHref="static/media/icons.e3d8f25c.svg#close" />
                                </svg>
                            </span>
                        </button>
                    </header>

                    <div className="ecl-modal__body">
                        <div
                            className="ecl-modal__body-scroll"
                            data-ecl-modal-scroll=""
                        >
                            {bodyContent}
                        </div>
                        <div
                            className="ecl-modal__body-overflow"
                            aria-hidden="true"
                        ></div>
                    </div>

                    <footer className="ecl-modal__footer">
                        <div className="ecl-modal__footer-content">
                            <button
                                className="ecl-button ecl-button--secondary ecl-modal__button"
                                type="button"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button
                                className="ecl-button ecl-button--primary ecl-modal__button"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Parent must control the open state
    modalTitle: PropTypes.string,
    bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default ModalComponent;
