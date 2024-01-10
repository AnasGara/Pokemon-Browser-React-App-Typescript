import { useSelector,useDispatch } from "react-redux";
import { setPokDex } from "../store/actions";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 300px;
    background-color: #ffffff;
    border-radius: 0rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: pointer;
`;

const Card = () => {
  const dispatch = useDispatch();
  const {loading,pokeData} = useSelector((state:any)=>state.pokemon);
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokeData.map((item:any) => {
          return (
            <>
              <StyledCard
                
                key={item.id}
                onClick={() => dispatch(setPokDex(item))}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </StyledCard>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
