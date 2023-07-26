/**
 * @description Inserts a space in any direction by creating a div with a margin
 * @param {object} props
 * @param {string} props.size height
 * @return {*}
 */
export const Spacer = (props) => {
	return <div id={props.id} className={`${props.size}`}></div>;
};
