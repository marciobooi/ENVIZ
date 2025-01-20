import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import '../styles/tooltip.css';

const ECLTooltip = ({ id = "ecl-tooltip", place = "bottom", delayShow = 200 }) => {
    return (
        <Tooltip
            id={id}
            place={place}
            className="ecl-tooltip"
            delayShow={delayShow}
        />
    );
};

ECLTooltip.propTypes = {
    id: PropTypes.string,
    place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    delayShow: PropTypes.number
};

export default ECLTooltip; 