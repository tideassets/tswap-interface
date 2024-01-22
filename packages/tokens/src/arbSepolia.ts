import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { CAKE, USDC } from './common'

export const arbitrumSepoliaTokens = {
  weth: WETH9[ChainId.ARBITRUM_SEPOLIA],
  usdc: USDC[ChainId.ARBITRUM_SEPOLIA],
  cake: CAKE[ChainId.ARBITRUM_SEPOLIA],
  link: new ERC20Token(
    ChainId.ARBITRUM_SEPOLIA,
    '0xaB7A6599C1804443C04c998D2be87Dc00A8c07bA',
    18,
    'LINK',
    'Chainlink Token',
  ),
  wbtc: new ERC20Token(
    ChainId.ARBITRUM_SEPOLIA,
    '0x4Ac0ED77C4375D48B51D56cc49b7710c3640b9c2',
    8,
    'WBTC',
    'Wrapped BTC',
  ),
}
