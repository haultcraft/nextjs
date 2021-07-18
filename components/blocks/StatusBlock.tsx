import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAvatarURL } from '@/utils';
import ServerContext from '@/components/context/ServerContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StatusBlock = ({}) => {
	const [playersExpanded, isPlayersExpanded] = useState<boolean>(false);
	const serverContext = useContext(ServerContext);


	return (
		<div style={{ backgroundImage: 'url(/img/stone_texture.png)', backgroundSize: '64px' }}
		>
			<div className='bg-none md:bg-amber-400/80 text-gray-100'>
				<div style={{ backgroundImage: 'url(/img/stone_texture.png)', backgroundSize: '64px' }}
						 className='max-w-screen-xl mx-auto'>
					<div
						className='max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 flex-row py-4 px-4 md:px-8 md:py-4 bg-gray-900/90'>
						{
							!serverContext.loading ?
								(
									<>
										<div className='min-w-[140px] m:h-[108px] flex items-start justify-center flex-col top-0 mx-auto'>

											<p><span className='text-gray-400'>Status: </span> <FontAwesomeIcon
												className={(serverContext.online ? 'text-mine-green' : 'text-mine-red') + ' text-sm text-opacity-90'}
												icon={['fas', (serverContext.online ? 'check' : 'times')]} /> {serverContext.online ? 'Online' : 'Offline'}
											</p>
											<p><span
												className='text-gray-400'>Jogadores: </span>{serverContext.onlinePlayers || 0} / {serverContext.maxPlayers || 0}
											</p>
											<p><span className='text-gray-400'>Versão: </span>{serverContext.version || ''}</p>
										</div>
										<Swiper
											breakpoints={{
												0: {
													slidesPerView: 2,
												},
												768: {
													slidesPerView: 3,
												},
												1024: {
													slidesPerView: 4,
												},
												1280: {
													slidesPerView: 6,
												},
												1536: {
													slidesPerView: 8,
												}
											}}
											navigation
											// pagination={{ clickable: true }}
											spaceBetween={30}
											autoplay={true}
											className='h-full w-full'>
											{
												serverContext.currentPlayers.length > 0
												&& serverContext.currentPlayers.map(player => (
													<SwiperSlide key={player}>
														<div
															className='flex flex-col items-center border-edge bg-gray-400/10 shadow w-full p-4 cursor-pointer hover:bg-gray-100/20 transition-color ease-in duration-200'>
															<img src={getAvatarURL(player)} alt={player + ' head'} className='h-12 rounded mb-2' />
															<p className='text-gray-200 font-semibold text-center text-sm break-all'>{player}</p>
														</div>
													</SwiperSlide>
												))
											}
										</Swiper>
									</>
								) :
								(
									<div className='h-[108px] flex items-center justify-center w-full'>
										<img src='/img/menu-realms--reversed.gif' />
									</div>
								)
						}

					</div>
				</div>
			</div>
		</div>
	);
};


export default StatusBlock;

