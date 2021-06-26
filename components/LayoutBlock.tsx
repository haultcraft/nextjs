import HeaderBlock from '@/components/HeaderBlock';
import FooterBlock from '@/components/FooterBlock';

const LayoutBlock = ({ children }) => {
	return (
		<div className='content'>
			<div>
				<main className='bg-white text-gray-700 font-medium'>
					<HeaderBlock />
					{children}
					<FooterBlock />
				</main>
			</div>
		</div>
	);
};

export default LayoutBlock;