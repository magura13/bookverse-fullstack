import styled from "styled-components"

const textOptions = ['Categorys', 'Favorites', 'My Shelf']

const HeaderOptionsComponent = styled.ul`
    display: flex;
`
const HeaderOptionComponent = styled.li `
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

function HeaderOptions() {
    return (
        <HeaderOptionsComponent>
            { textOptions.map( (text) => (
                <HeaderOptionComponent><p>{text}</p></HeaderOptionComponent>
            ) ) }
      </HeaderOptionsComponent>
    )
}

export default HeaderOptions