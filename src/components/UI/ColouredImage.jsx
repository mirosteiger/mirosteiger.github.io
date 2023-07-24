const ColouredImage = (props) => {
	const { src, rounded, colour, size, border } = props;
	return (
		<div
			style={{ height: size, width: size }}
			className={`border-red-200
      ${rounded ? 'rounded-full' : ''} overflow-hidden 
      ${border ? 'border-2' : 'border-0'}
      `}
		>
			<img
				src={src}
				className="h-full cursor-pointer bg-neutral-500 object-cover transition-all hover:bg-orange-300 dark:bg-orange-200 dark:hover:bg-orange-300"
			/>
		</div>
	);
};

export default ColouredImage;
