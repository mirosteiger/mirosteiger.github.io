import { Badge } from './Badge';
import { FaGithub, FaDisplay } from 'react-icons/fa6';

export const ImageCard = ({ data }) => {
	const { title, imgUrl, description, ghLink, liveLink, tags } = data;
	return (
		<div
			id="cardContainer"
			className="flex flex-col rounded border-2 border-gray-900 shadow-lg dark:border-green-200"
		>
			{/* -------- CARD IMAGE -------- */}
			<div id="card-image" className=" h-48 w-full  shrink-0 overflow-hidden">
				<img
					className="min-h-[250px] w-full object-cover"
					src={imgUrl}
					alt="Project Teaser Image"
				/>
			</div>

			{/* -------- CARD BODY -------- */}
			<div
				id="card-body"
				className="flex h-full flex-col justify-between rounded pb-12 shadow-lg"
			>
				<div className="px-6 py-4 ">
					<div className="mb-2 text-xl font-bold">{title}</div>
					<p className="text-justify">{description}</p>
				</div>
				<div className="px-6 pb-2 pt-4">
					{tags &&
						tags.map((t, index) => {
							return <Badge key={index}>{t}</Badge>;
						})}
				</div>

				{/* -------- FOOTER LINKS -------- */}
				<div className="flex justify-around px-16 pb-2 pt-4">
					{ghLink && (
						<a
							href={ghLink}
							target="_blank"
							className="flex flex-col items-center justify-center"
						>
							<FaGithub size={35} />
							<p>Github</p>
						</a>
					)}
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							className="flex flex-col items-center justify-center"
						>
							<FaDisplay size={35} />
							<p>
								Live{' '}
								{title === 'Bachelors Thesis' ? (
									<span className="text-xs text-gray-500">(after 1.40m)</span>
								) : null}
							</p>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
