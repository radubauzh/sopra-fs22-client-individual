import 'styles/ui/GlasBox.scss';
import PropTypes from "prop-types";

const GlasBox = props => (
  <div {...props} className={`glas-box ${props.className ?? ''}`}>
    {props.children}
  </div>
);

GlasBox.propTypes = {
  children: PropTypes.node,
};

export default GlasBox;