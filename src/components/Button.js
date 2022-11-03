const Button = (props) => {
  let classes = "p-[20px] rounded-[5px] text-[21px] active:scale-105 transition-transform w-full"
  
  if(props.style === 'free') classes += " text-taro-green"
  else classes += " bg-taro-green text-black"
  
  return(
    <button className={classes}>
      {props.children}
    </button>
  )
}

export default Button