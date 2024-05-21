import { useState } from 'react'
import './App.css'
import { Button, Card, Divider, Flex, Input } from 'antd'
import icone from "./assets/icone.png";
import banner from "./assets/banner-editado.jpg";
import cachorro from "./assets/cachorro doacao.jpg";
import lar from "./assets/lar temporario.jpg";
import medica from "./assets/medica.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMailchimp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useEffect } from 'react';
const { TextArea } = Input;

function App() {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  // };

  // Updated Code

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
    const date = new Date()
    const body = {
      "ip":res.data.ip,
      "data_hora": `${date.toLocaleDateString()}`
    }
    console.log(body)
    return await axios({
      method: "POST",
      data: JSON.stringify(body), 
      headers:{
        'Content-Type': 'application/json',
      },
      url: "https://bola-de-pelo-8a8c3-default-rtdb.firebaseio.com/dados.json",
    })
    .then(response =>{ 
      if(response.status == 201){
        return response.data
      }else{
        return response.data
      }
    })
    .catch(error =>{
      if(error.response.status == 403){
        return false
      }if(error.response.status == 404){
        return false
      }
      return error.response.data
  })
  };

  useEffect(() =>{
    const pegarIp = async () =>{
      await getData()
    }
    pegarIp()
  },[])
  return (
   <Flex vertical={true} align='flex-start' justify='center' style={{width:"100%", height:"100%", padding:0, margin:0}}>
    <Card style={{backgroundColor:"#FD831C", width:"100%", borderRadius:0, height:"12vh"}}>
      <Flex vertical={false} style={{width:"100%"}} justify='flex-start' gap={60}>
        <img src={icone} height={150} style={{marginLeft:"5rem"}} />
        <a href="http://" className='link-navbar'>Quem Somos</a>
        <a href="http://" className='link-navbar'>Faça uma Doação</a>
        <a href="http://" className='link-navbar'>Fale Conosco</a>
      </Flex>
    </Card>
    <Flex vertical={false} style={{width:"100%"}}>
        <img src={banner} className='banner' />
        <h1 className='titulo-banner'>Para nós, toda vida importa</h1>
      </Flex>
      <Card style={{backgroundColor:"white", width:"100%", borderRadius:0, paddingTop:"5vh"}}>
        <Flex vertical={false} align='center' justify='space-around' style={{width:"100%"}}>
          <Flex vertical={true} style={{marginTop:"10vh", marginBottom:"10vh"}}>
            <h1 className='titulo-quem-somos'>Bola de Pelo</h1>
            <Card style={{width:"40vw", height:"1vh", backgroundColor:"#FD831C"}} />
            <p className='texto-quem-somos'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus tellus ac ligula aliquam volutpat. Mauris commodo, erat et tempor laoreet, ex ipsum condimentum velit, quis molestie felis enim tristique felis. Etiam ultricies est at egestas mattis. Cras eu mattis turpis. Donec sit amet pellentesque mi, non efficitur lorem. Proin ultrices fermentum viverra. Fusce fringilla mollis tortor, sed vestibulum odio finibus quis.</p>
          </Flex>
          <img src={icone} height={300} />
        </Flex>
      </Card>

      <Card style={{backgroundColor:"#FD831C", width:"100%", borderRadius:0,paddingTop:"10vh",}}>
        <Flex wrap={"wrap"} vertical={false} align='center' justify='space-around' style={{width:"100%"}}>
          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={cachorro} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Doação</h1>
              <p className='descricao-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus tellus ac ligula aliquam volutpat</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card'>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={lar} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Lar Temporário</h1>
              <p className='descricao-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus tellus ac ligula aliquam volutpat</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card'>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>

          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={medica} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Médico Parceiro</h1>
              <p className='descricao-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus tellus ac ligula aliquam volutpat</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card'>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Card style={{backgroundColor:"white", width:"80%", borderRadius:10, minHeight:"60vh", marginTop:"10vh", marginBottom:"10vh"}}>
            <Flex vertical={false} align='flex-start' justify='space-between' style={{width:"100%"}}>
              <Flex vertical={true} align='flex-start' justify='flex-start'>
                <h1 className='titulo-fale-conosco'>Fale Conosco</h1>
                <Card style={{width:"20vw", height:"1vh", backgroundColor:"#FD831C"}} />
                <p className='descricao-fale-conosco'>Queremos ouvir você! Seja para oferecer um lar amoroso a um de nossos animais resgatados, fazer uma doação, se voluntariar ou apenas compartilhar sua experiência conosco, estamos aqui para ajudar e apreciamos seu apoio.</p>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:30}}>
                  <FontAwesomeIcon icon={faWhatsapp} color='#FD831C' size='2x' />
                  <p className='info-fale-conosco'>85 9783-3091</p>
                </Flex>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:10}}>
                  <FontAwesomeIcon icon={faEnvelope} color='#FD831C' size='2x'  />
                  <p className='info-fale-conosco'>COLCOAR EMAIL</p>
                </Flex>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:10}}>
                  <FontAwesomeIcon icon={faInstagram} color='#FD831C' size='2x'  />
                  <p className='info-fale-conosco'>Bola de Pelo</p>
                </Flex>
              </Flex>
              <Flex vertical={true} align='flex-start' justify='flex-start' gap={10}>
                <Input placeholder="Nome" style={{width:"28vw"}} size='large' />
                <Input placeholder="Telefone" style={{width:"28vw"}} size='large'  />
                <Input placeholder="Telefone" style={{width:"28vw"}} size='large'  />
                <Input placeholder="Assunto" style={{width:"28vw"}} size='large'  />
                <TextArea rows={4} placeholder="Descrição" maxLength={250} />
                <Button className='botao-fale-conosco'>
                  <Flex vertical={false} align={"center"} justify={"center"} gap={20}>
                  <p className="texto-botao-fale-conosco">Enviar Mensagem</p>
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Card>
      <Card style={{backgroundColor:"white", width:"100%", borderRadius:0, height:"7vh"}}>
            <Flex vertical={false} align='center' justify='center' style={{width:"100%"}}>
              <p className='texto-footer'>Copyright © Bola de Pelo. Todos os direitos reservado.</p>
            </Flex>
      </Card>
   </Flex>
  )
}

export default App
