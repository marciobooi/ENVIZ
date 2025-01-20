import { useState } from "react";
import PropTypes from "prop-types";

const ModalComponent = ({
    triggerText = "Modal toggle",
    modalTitle = "Modal title",
    bodyContent = "Scrollable content goes here.",
    onClose,
    onSubmit,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        if (onClose) onClose();
    };

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
        handleClose();
    };

    return (
        <div>
            <button
                className="ecl-button ecl-button--secondary"
                id="modal-toggle"
                aria-controls="modal-example"
                aria-haspopup="dialog"
                onClick={handleOpen}
            >
                {triggerText}
            </button>

            {isOpen && (
                <dialog
                    id="modal-example"
                    aria-modal="true"
                    className="ecl-modal ecl-modal--l"
                    aria-labelledby="modal-example-header"
                >
                    <div className="ecl-modal__container">
                        <div className="ecl-modal__content ecl-container">
                            <header className="ecl-modal__header">
                                <div
                                    className="ecl-modal__header-content"
                                    id="modal-example-header"
                                >
                                    {modalTitle}
                                </div>
                                <button
                                    className="ecl-button ecl-button--tertiary ecl-modal__close ecl-button--icon-only"
                                    type="button"
                                    onClick={handleClose}
                                >
                                    <span className="ecl-button__container">
                                        <span className="ecl-button__label" data-ecl-label="true">
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
                                <div className="ecl-modal__body-scroll" data-ecl-modal-scroll="">
                                    {bodyContent}
                                </div>
                                <div className="ecl-modal__body-overflow" aria-hidden="true"></div>
                                <div className="ecl-modal__body-fixed">
                                    <div className="ecl-checkbox">
                                        <input
                                            type="checkbox"
                                            name="checkbox-default"
                                            className="ecl-checkbox__input"
                                            id="checkbox-default-1"
                                            value="1"
                                        />
                                        <label
                                            htmlFor="checkbox-default-1"
                                            className="ecl-checkbox__label"
                                        >
                                            <span className="ecl-checkbox__box">
                                                <svg
                                                    className="ecl-icon ecl-icon--m ecl-checkbox__icon"
                                                    focusable="false"
                                                    aria-hidden="true"
                                                >
                                                    <use
                                                        xlinkHref="static/media/icons.e3d8f25c.svg#check"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ecl-checkbox__text">Option label</span>
                                        </label>
                                    </div>
                                </div>
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
                </dialog>
            )}
        </div>
    );
};

ModalComponent.propTypes = {
    triggerText: PropTypes.string,
    modalTitle: PropTypes.string,
    bodyContent: PropTypes.string,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default ModalComponent;
