import HeaderBlock from '@/components/blocks/HeaderBlock';
import FooterBlock from '@/components/blocks/FooterBlock';
import StatusBlock from '@/components/blocks/StatusBlock';

const LayoutBlock = ({ children }) => {
	return (
		<div className='content'>
			<div>
				<main className='bg-white text-gray-700 font-medium'>
					<HeaderBlock />
					<StatusBlock />
					{children}
					<FooterBlock />
				</main>
			</div>
		</div>
	);
};

export default LayoutBlock;