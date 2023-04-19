import { jsx as _jsx } from "react/jsx-runtime";
import './myLabel.css';
export const MyLabel = ({ allCaps = false, backgroundColor = 'transparent', color = 'primary', label = 'No Label', size = 'normal', fontColor = '#1f1f1f' }) => {
    return (_jsx("span", { style: { backgroundColor, color: fontColor }, className: `label ${size} text-${color}`, children: allCaps ? label.toUpperCase() : label }));
};
