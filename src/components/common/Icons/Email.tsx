import { TIconProps } from './types'

export const IconEmail = ({ handleClick, height, width, isActive }: TIconProps) => (
  <svg width={width || '24'} height={height || '24'} viewBox='0 0 24 24' fill='none'>
    <g id='Iconly/Light-Outline/Message'>
      <g id='Message'>
        <path
          id='Fill 1'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.777 13.4647C11.108 13.4647 10.441 13.2437 9.88298 12.8017L5.39798 9.18574C5.07498 8.92574 5.02498 8.45274 5.28398 8.13074C5.54498 7.80974 6.01698 7.75874 6.33898 8.01774L10.82 11.6297C11.383 12.0757 12.176 12.0757 12.743 11.6257L17.179 8.01974C17.501 7.75674 17.973 7.80674 18.235 8.12874C18.496 8.44974 18.447 8.92174 18.126 9.18374L13.682 12.7957C13.12 13.2417 12.448 13.4647 11.777 13.4647Z'
          fill={isActive ? '#f6bf63' : 'white'}
        />
        <g id='Group 5'>
          <mask id='mask0' maskUnits='userSpaceOnUse' x='1' y='2' width='22' height='20'>
            <path id='Clip 4' fillRule='evenodd' clipRule='evenodd' d='M1 2H22.4999V21.5H1V2Z' fill='white' />
          </mask>
          <g mask='url(#mask0)'>
            <path
              id='Fill 3'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.839 20H16.659C16.661 19.998 16.669 20 16.675 20C17.816 20 18.828 19.592 19.604 18.817C20.505 17.92 21 16.631 21 15.188V8.32C21 5.527 19.174 3.5 16.659 3.5H6.841C4.326 3.5 2.5 5.527 2.5 8.32V15.188C2.5 16.631 2.996 17.92 3.896 18.817C4.672 19.592 5.685 20 6.825 20H6.839ZM6.822 21.5C5.279 21.5 3.901 20.94 2.837 19.88C1.652 18.698 1 17.032 1 15.188V8.32C1 4.717 3.511 2 6.841 2H16.659C19.989 2 22.5 4.717 22.5 8.32V15.188C22.5 17.032 21.848 18.698 20.663 19.88C19.6 20.939 18.221 21.5 16.675 21.5H16.659H6.841H6.822Z'
              fill={isActive ? '#f6bf63' : 'white'}
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
