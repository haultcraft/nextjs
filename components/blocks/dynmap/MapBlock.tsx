const DYNMAP_HOST = process.env['NEXT_PUBLIC_DYNMAP'];

const MapBlock = ({}) => {
	return (
		<>
			<iframe src={DYNMAP_HOST} className='flex w-full h-screen'>
				<p>Your browser does not support iframes.</p>
			</iframe>
		</>
	);
};
export default MapBlock;