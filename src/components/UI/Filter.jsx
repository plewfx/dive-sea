const Filter = ({ name, icon, gap }) => {
  return (
    <div className={'flex items-center p-17 rounded-13 border-2 border-black-14 dark:border-grey-F9 text-15 text-black-A1 tracking-0.2 leading-150 font-manrope ' + `gap-${gap}`}>
        {icon && <img className="w-[1.74vw]" src={'/src/assets/icons/' + icon + '.svg'} alt={icon} />}
        {name}
    </div>
  )
}

export default Filter