import React from 'react'

interface ModalProps {
    children: React.ReactNode,
    title: string,
    btnText?: string,
    onClick?: (event: React.FormEvent) => void,
    onClose: () => void
}

export default function Modal({ children, title, btnText, onClick, onClose }: ModalProps) {
    document.body.style.overflow = 'hidden'
    const closeHandler = (e: React.FormEvent<Element>) => {
        document.body.style.overflow = 'auto'
        onClose()
    }
    return (
        <div className='modal bg-dark bg-opacity-50 d-block'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeHandler}></button>
                    </div>
                    <div className="modal-body py-0">
                        {children}
                    </div>
                    {btnText &&
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onClick}>{btnText}</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}
