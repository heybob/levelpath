import { useContext } from "react"
import { WikiContext } from "../../contexts/WikiContext"
import { Card } from "../Card/Card";
import { Profile } from "../../shared/types";

export function ProfileList() {
    const {state} = useContext(WikiContext);
    const {paginatedData} = state;
    return (
        <div className='list-container'>
        {paginatedData && paginatedData.map( (profile: Profile, index: number) => {
          return (
          <Card key={index} name={profile.name}  title={profile.title}  birthYear={profile.birthYear} extract={profile.extract} thumbnail={profile.thumbnail}/>
          )
          })
        }
      </div>
    )
}