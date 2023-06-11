import styled from 'styled-components'

function Icon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_239_3)">
        <path d="M12.927 2.57296L15.927 5.57296C15.9621 5.60792 15.9859 5.65251 15.9956 5.70106C16.0053 5.74962 16.0004 5.79995 15.9814 5.84569C15.9624 5.89143 15.9303 5.9305 15.8891 5.95797C15.8479 5.98543 15.7995 6.00005 15.75 5.99996H13.5V12.75C13.5 12.9489 13.421 13.1396 13.2803 13.2803C13.1397 13.4209 12.9489 13.5 12.75 13.5C12.5511 13.5 12.3603 13.4209 12.2197 13.2803C12.079 13.1396 12 12.9489 12 12.75V5.99996H9.75C9.70049 6.00005 9.65207 5.98543 9.61087 5.95797C9.56968 5.9305 9.53757 5.89143 9.51861 5.84569C9.49965 5.79995 9.4947 5.74962 9.50438 5.70106C9.51406 5.65251 9.53795 5.60792 9.573 5.57296L12.573 2.57296C12.5962 2.54968 12.6238 2.53121 12.6542 2.5186C12.6846 2.506 12.7171 2.49951 12.75 2.49951C12.7829 2.49951 12.8154 2.506 12.8458 2.5186C12.8762 2.53121 12.9038 2.54968 12.927 2.57296ZM0 12.25C0 12.051 0.0790176 11.8603 0.21967 11.7196C0.360322 11.579 0.551088 11.5 0.75 11.5H8.25C8.44891 11.5 8.63968 11.579 8.78033 11.7196C8.92098 11.8603 9 12.051 9 12.25C9 12.4489 8.92098 12.6396 8.78033 12.7803C8.63968 12.9209 8.44891 13 8.25 13H0.75C0.551088 13 0.360322 12.9209 0.21967 12.7803C0.0790176 12.6396 0 12.4489 0 12.25ZM0 8.24996C0 8.05105 0.0790176 7.86028 0.21967 7.71963C0.360322 7.57898 0.551088 7.49996 0.75 7.49996H5.25C5.44891 7.49996 5.63968 7.57898 5.78033 7.71963C5.92098 7.86028 6 8.05105 6 8.24996C6 8.44887 5.92098 8.63964 5.78033 8.78029C5.63968 8.92094 5.44891 8.99996 5.25 8.99996H0.75C0.551088 8.99996 0.360322 8.92094 0.21967 8.78029C0.0790176 8.63964 0 8.44887 0 8.24996ZM0 4.24996C0 4.05105 0.0790176 3.86028 0.21967 3.71963C0.360322 3.57898 0.551088 3.49996 0.75 3.49996H3.25C3.44891 3.49996 3.63968 3.57898 3.78033 3.71963C3.92098 3.86028 4 4.05105 4 4.24996C4 4.44887 3.92098 4.63964 3.78033 4.78029C3.63968 4.92094 3.44891 4.99996 3.25 4.99996H0.75C0.551088 4.99996 0.360322 4.92094 0.21967 4.78029C0.0790176 4.63964 0 4.44887 0 4.24996Z" />
      </g>
      <defs>
        <clipPath id="clip0_239_3">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
`

export const ControlTitle = styled.div`
  font-size: 0.875rem;
  margin-right: 1.25rem;
  font-weight: 700;
`

export const Sort = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div`
  padding: 0.75rem 3.125rem;
  background-color: rgba(var(--color-green1-rgb), 0.4);
  margin-bottom: 0.938rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`

export const Number = styled.div`
  width: 5rem;
`
export const User = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  background-color: var(--color-gray1);
  border-radius: 50%;
  margin-right: 1.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Points = styled.div``

export const SortElement = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;
  fill: var(--color-text);

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: var(--color-green2);
  }
`

export const SortElementIcon = styled.div((props: { dir?: string }) => {
  return `
      margin-left: 0.625rem;
      ${props.dir === 'DESC' && 'transform: rotate(180deg);'}
    `
})

export const StyledIconWrapper = styled(Icon)``
