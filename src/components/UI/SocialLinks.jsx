import { FaGithub, FaLinkedin, FaSpotify, FaSquareXing } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';

export const SocialLinks = ({ nav }) => {
	return (
		<div
			className={`mr-4 mt-6  justify-around ${
				nav
					? 'absolute bottom-24 flex w-1/2 sm:hidden'
					: 'hidden w-full justify-around border-t-2 border-red-200 px-8 py-6 dark:border-green-200 sm:flex'
			}`}
		>
			<a href="https://www.github.com/mirosteiger" target="_blank">
				<FaGithub size={35} />
			</a>
			<a
				href="https://www.linkedin.com/in/miro-steiger-26a50a268/"
				target="_blank"
			>
				<FaLinkedin size={35} />
			</a>
			<a href="https://www.xing.com/profile/Miro_Steiger" target="_blank">
				<FaSquareXing size={35} />
			</a>
			<a
				href="https://open.spotify.com/user/mirosteiger?si=9b2f505885ec4383"
				target="_blank"
			>
				<FaSpotify size={35} />
			</a>
			<a href="mailto:miro.steiger@outlook.de" target="_blank">
				<HiMail size={38} />
			</a>
		</div>
	);
};
