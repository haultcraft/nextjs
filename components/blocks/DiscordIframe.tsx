const DiscordIframe = ({}) => {
	return (
		<>
			<iframe src='https://discord.com/widget?id=864214551004184587&theme=dark' width='350' height='500'
							allowTransparency={true} frameBorder='0'
							sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts' />
		</>
	);
};
export default DiscordIframe;