const Modal = ({active, setActive, setAdd}) => {
    return (
        <div className={active ? 'confirmation' : 'confirmation__none'}>
            <p>Подвердите действие!</p>
            <div className="buttons">
                <button onClick={() => {
                    setActive(false) 
                    setAdd(false)
                }}>Отмена!</button>
                <button onClick={() => {
                    setActive(false)
                    setAdd(true)
                }}>Подтвердить!</button>
            </div>
        </div>
    )
}

export default Modal;