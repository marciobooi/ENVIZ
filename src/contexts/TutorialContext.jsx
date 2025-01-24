import { useState } from 'react';
import PropTypes from 'prop-types';
import { TutorialContext } from './TutorialContextDef';

const TutorialProvider = ({ children }) => {
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);
    const startTutorial = () => setIsTutorialOpen(true);
    const endTutorial = () => setIsTutorialOpen(false);

    return (
        <TutorialContext.Provider value={{ isTutorialOpen, startTutorial, endTutorial }}>
            {children}
        </TutorialContext.Provider>
    );
};

TutorialProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TutorialProvider; 