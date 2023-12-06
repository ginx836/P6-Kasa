import React, { useState, useRef, useEffect } from 'react'
import arrow from '../assets/arrow.svg'
import '../styles/components/collapse.scss'

/**
  *
  * @param {string} label titre du collapse
  * @param {JSX.Element} children contenu du collapse
  * @returns {JSX.Element} collapse
  * @description collapse
  * @example
  * 
  * On définit une hauteur maximale pour le contenu du collapse, qui est égale à 0 si isOpen est false, et à la hauteur du contenu si isOpen est true.
  * useEffect permet de mettre à jour la hauteur réelle du contenu (scrollHeight) en fonction de isOpen.
  **/


const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {

    /**
     * @description Met à jour la hauteur du contenu en fonction de isOpen
     */
  
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [isOpen])

  /**
   * 
   * @returns {void} met à jour isOpen
   */
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="container">
      <div className="collapse__bar">
        <h2 className="title">{label}</h2>
        <img
          className="chevron"
          src={arrow}
          alt="bouton d'ouverture"
          onClick={toggleOpen}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </div>
      <div
        className="container__content"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div className="content__inner" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse
