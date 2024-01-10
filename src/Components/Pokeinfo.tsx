import { useSelector } from "react-redux";
import styled from "styled-components";

const Abilities = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;
const BaseState = styled.div`
margin-top: 2rem;
`;
const Group = styled.div`
background-color: #52171e;
color: white;
padding: 0.5rem;
font-size: 12px;
border-radius: 8px;
margin-left: 1rem;
`;

const Pokeinfo = () => {
    const data = useSelector((state:any) => state.pokemon.pokeDex);
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <Abilities>
                        {
                            data.abilities.map((poke:any)=>{
                                return(
                                    <>
                                     <Group>
                                        <h2>{poke.ability.name}</h2>
                                    </Group>
                                    </>
                                )
                            })
                        }
                    </Abilities>
                    <BaseState>
                        {
                            data.stats.map((poke:any)=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </BaseState>
                </>
            )
        }

        </>
    )
}
export default Pokeinfo