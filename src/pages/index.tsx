import { styled } from "@/styles"

const Button = styled('button', {
  backgroundColor: '$rocketSeat',
  transition: 'all .4s',
  padding: '4px 8px',
  border: 0,
  borderRadius: 4,
  fontWeight: 700,
  '&:hover': {
    backgroundColor: '$rocketSeatDark'
  }
})

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Button>
        Teste
        <span>Teste 2</span>
      </Button>
    </>
  )
}
