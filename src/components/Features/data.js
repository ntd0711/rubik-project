import {
  Flow_icon,
  Aave_icon,
  Avax_icon,
  BNB_icon,
  BTC_icon,
  DAI_icon,
  ETH_icon,
  Compound_icon,
  Polygon_icon,
  Terra_icon,
  Venus_icon,
  Solana_icon,
  avt_1,
  avt_2,
  avt_3,
  avt_4,
  avt_5,
  face_recognition,
  fingerprint,
} from './export';

const data = [
  {
    id: 1,
    avatar: avt_2,
    title: 'Stablecoin Minting Protocol',
    description: 'Combining existing lending platforms with cross-chain liquidity protocol.',
    icons: [
      {
        img: Compound_icon,
        status: 'active',
      },
      {
        img: DAI_icon,
        status: 'active',
      },
      {
        img: Aave_icon,
        status: 'active',
      },
      {
        img: Venus_icon,
        status: 'active',
      },
    ],
  },
  {
    id: 2,
    avatar: avt_1,
    title: 'Manage Funds & NFTs',
    description: 'Multi-chain supported and many more coming in the future.',
    icons: [
      {
        img: BNB_icon,
        status: 'active',
      },
      {
        img: BTC_icon,
        status: 'active',
      },
      {
        img: ETH_icon,
        status: 'active',
      },
      {
        img: Solana_icon,
        status: 'active',
      },
      {
        img: Flow_icon,
        status: 'disabled',
      },
      {
        img: Terra_icon,
        status: 'disabled',
      },
      {
        img: Avax_icon,
        status: 'disabled',
      },
      {
        img: Polygon_icon,
        status: 'disabled',
      },
    ],
  },
  {
    id: 3,
    avatar: avt_4,
    title: 'Cross-Chain Lending',
    description: 'Combining existing lending platforms with cross-chain liquidity protocol.',
    icons: [
      {
        img: Compound_icon,
        status: 'active',
      },
      {
        img: DAI_icon,
        status: 'active',
      },
      {
        img: Aave_icon,
        status: 'active',
      },
      {
        img: Venus_icon,
        status: 'active',
      },
    ],
  },
  {
    id: 4,
    avatar: avt_3,
    title: 'Protect Your Assets',
    description: 'Layered encryption and authorization to maximize protection.',
    icons: [
      {
        img: fingerprint,
        text: 'Multiple encryption layers.',
      },
      {
        img: face_recognition,
        text: 'Biometrics & FaceID ready.',
      },
    ],
  },
  {
    id: 5,
    avatar: avt_5,
    title: 'Swap Effortlessly',
    description: 'Creating a DEX that connects every blockchain with top-designed UI/UX.',
    icons: [
      {
        img: Terra_icon,
        status: 'active',
      },
      {
        img: Flow_icon,
        status: 'active',
      },
      {
        img: ETH_icon,
        status: 'active',
      },
      {
        img: Solana_icon,
        status: 'active',
      },
    ],
  },
]

export default data