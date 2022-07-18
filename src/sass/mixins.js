export const flexLayout = (direction = 'row', justify = 'center', align = 'center') => {
    return `
           display: flex;
           flex-direction: ${direction};
           justify-content: ${justify};
           align-items: ${align};
    `
}

export const buttonStyles = () => {
    return `
          height: 3rem;
          min-width: 7rem;
          color: white;
          border-radius: 4px;
          box-shadow: none;
          margin: .5rem;
          border: 1px solid white;
           `
}