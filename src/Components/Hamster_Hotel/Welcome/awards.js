import {IMG} from '../../Shared/img'

export const AwardImg = (props) =>{
    return(
            <IMG src={props.awardType} alt={props.alt} width={props.width}/>
        
    )
}
