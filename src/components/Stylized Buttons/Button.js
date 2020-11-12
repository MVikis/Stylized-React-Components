import Image from './button.png'

export default function Button(props){

  


    return(
        <a href={props.Link}  className="btn-primary" ><span>{props.text}</span>
        <div style={{backgroundImage: `url(${Image})`}}/></a>
    )
}