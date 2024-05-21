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
const { innerWidth: width, innerHeight: height } = window;

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");

  const enviarmensagem = (tipo) =>{
    if(tipo == "fale conosco"){
      if(nome == "" || telefone == "" || descricao == "") return
      window.location.href = `https://wa.me/8597833091?text=Olá%20boa%20tarde,%20me%20chamo%20${nome}%20,meu%20telefone%20é%20${telefone},${descricao}`;
      return
    }
    window.location.href = `https://wa.me/8597833091?text=Olá%20boa%20tarde,%20queria%20saber%20mais%20informações`;
  }

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
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
      <Flex vertical={false} style={{width:"100%"}} justify='center' gap={60}>
        <img src={icone} height={150} style={{marginLeft:"5rem", zIndex:100}} />
      </Flex>
    </Card>
      {innerWidth > 1000 &&(
        <Flex vertical={false} style={{width:"100%"}}>
          <img src={banner} className='banner' />
          <h1 className='titulo-banner'>Para nós, toda vida importa</h1>
        </Flex>
      )}
      {innerWidth > 1000 
      ?
      <Card style={{backgroundColor:"white", width:"100%", borderRadius:0, paddingTop:"5vh", paddingLeft:150}}>
        <Flex vertical={false} align='center' justify='center' style={{width:"90%"}}>
          <Flex vertical={true} style={{marginTop:"10vh", marginBottom:"10vh"}}>
            <h1 className='titulo-quem-somos'>Bola de Pelo</h1>
            <Card style={{width:"30vw", height:"1vh", backgroundColor:"#FD831C"}} />
            <Flex style={{width:"50%"}}>
            <p className='texto-quem-somos'>Somos um grupo de pessoas apaixonadas por animais, dedicadas a resgatar, reabilitar e encontrar lares amorosos para cães e gatos abandonados, maltratados ou em situação de risco. Acreditamos que todo animal merece uma vida digna, cheia de amor e carinho. Desde então, nossa família não parou de crescer, contando hoje com uma rede de voluntários, doadores e parceiros que nos ajudam a transformar a vida de inúmeros bichinhos.</p>
            </Flex>
          </Flex>
          <img src={icone} height={300} />
        </Flex>
      </Card>
      :
      <Card style={{backgroundColor:"white", width:"100%", borderRadius:0, paddingTop:"5vh"}}>
        <Flex vertical={false} align='center' justify='center' style={{width:"100%"}}>
          <Flex vertical={true} align='center' style={{marginTop:"10vh", marginBottom:"10vh", width:"100%"}}>
            <h1 className='titulo-quem-somos'>Bola de Pelo</h1>
            <Card style={{width:"40vw", height:"1vh", backgroundColor:"#FD831C"}} />
            <Flex style={{width:"90%"}}>
            <p className='texto-quem-somos'>Somos um grupo de pessoas apaixonadas por animais, dedicadas a resgatar, reabilitar e encontrar lares amorosos para cães e gatos abandonados, maltratados ou em situação de risco. Acreditamos que todo animal merece uma vida digna, cheia de amor e carinho. Desde então, nossa família não parou de crescer, contando hoje com uma rede de voluntários, doadores e parceiros que nos ajudam a transformar a vida de inúmeros bichinhos.</p>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      }

      <Card style={{backgroundColor:"#FD831C", width:"100%", borderRadius:0,paddingTop:"10vh",}}>
        <Flex wrap={"wrap"} vertical={innerWidth < 1000 ? true : false} align='center' justify='space-around' style={{width:"100%"}}>
          {innerWidth > 1000 
          ?
          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={cachorro} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Doação</h1>
              <p className='descricao-card'>Faça uma doação financeira ou de materiais e contribua para o bem-estar dos nossos animais.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card' onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          :
          <Card style={{backgroundColor:"white", width:"90%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={cachorro} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Doação</h1>
              <p className='descricao-card'>Faça uma doação financeira ou de materiais e contribua para o bem-estar dos nossos animais.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card'  onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          }
          

          {innerWidth > 1000 ?
          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={lar} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Lar Temporário</h1>
              <p className='descricao-card'>Torne-se um lar temporário da Bola de Pelo e ofereça um refúgio seguro e acolhedor para um cão ou gato enquanto ele busca um lar definitivo.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card' onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          :
          <Card style={{backgroundColor:"white", width:"90%", borderRadius:10, minHeight:"70vh",marginTop:30, padding:0}}
          cover={
            <img alt="example" src={lar} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Lar Temporário</h1>
              <p className='descricao-card'>Torne-se um lar temporário da Bola de Pelo e ofereça um refúgio seguro e acolhedor para um cão ou gato enquanto ele busca um lar definitivo.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card' onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          }

          {innerWidth > 1000 
          ?
          <Card style={{backgroundColor:"white", width:"30%", borderRadius:10, minHeight:"70vh", padding:0}}
          cover={
            <img alt="example" src={medica} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Médico Parceiro</h1>
              <p className='descricao-card'>Torne-se um médico parceiro da Bola de Pelo e ofereça seus serviços veterinários para os cães e gatos acolhidos pela nossa organização.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card' onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          :
          <Card style={{backgroundColor:"white", width:"90%", borderRadius:10, minHeight:"70vh", marginTop:30, padding:0}}
          cover={
            <img alt="example" src={medica} height={300}/>}
            >
            <Flex vertical={true} align='center' justify='space-between' style={{width:"100%", height:"28vh",}}>
              <Flex vertical={true} align='center'> 
              <h1 className='titulo-card'>Médico Parceiro</h1>
              <p className='descricao-card'>Torne-se um médico parceiro da Bola de Pelo e ofereça seus serviços veterinários para os cães e gatos acolhidos pela nossa organização.</p>
              </Flex>
              <Flex style={{width:"100%"}}>
                  <Button type="primary" className='botao-card' onClick={enviarmensagem}>
                    <p className="texto-botao">Saiba Mais</p>
                </Button>
              </Flex>
            </Flex>
          </Card>
          }
          

          {innerWidth > 1000 
          ?
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
                  <p className='info-fale-conosco'>boladepeloprotetores@gmail.com</p>
                </Flex>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:10}}>
                  <FontAwesomeIcon icon={faInstagram} color='#FD831C' size='2x'  />
                  <a href='https://www.instagram.com/boladepelo_sapiranga?igsh=MXU5NWZxN2dmMWx6eg==' className='info-fale-conosco'>Bola de Pelo</a>
                </Flex>
              </Flex>
              <Flex vertical={true} align='flex-start' justify='flex-start' gap={10}>
                <Input placeholder="Nome" style={{width:"28vw"}} size='large' onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Telefone" style={{width:"28vw"}} size='large' onChange={(e) => setTelefone(e.target.value)} />
                <TextArea rows={4} placeholder="Mensagem" maxLength={250} onChange={(e) => setDescricao(e.target.value)} />
                <Button type='primary' className='botao-fale-conosco' onClick={() => enviarmensagem('fale conosco')}>
                  <Flex vertical={false} align={"center"} justify={"center"} gap={20}>
                  <p className="texto-botao-fale-conosco">Enviar Mensagem</p>
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Card>
          :
          <Card style={{backgroundColor:"white", width:"95%", borderRadius:10, minHeight:"60vh", marginTop:"10vh", marginBottom:"10vh"}}>
            <Flex vertical={true} align='center' justify='center' style={{width:"100%"}}>
              <Flex vertical={true} align='center' justify='center'>
                <h1 className='titulo-fale-conosco'>Fale Conosco</h1>
                <Card style={{width:"20vw", height:"1vh", backgroundColor:"#FD831C"}} />
                <p className='descricao-fale-conosco-full'>Queremos ouvir você! Seja para oferecer um lar amoroso a um de nossos animais resgatados, fazer uma doação, se voluntariar ou apenas compartilhar sua experiência conosco, estamos aqui para ajudar e apreciamos seu apoio.</p>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:30}}>
                  <FontAwesomeIcon icon={faWhatsapp} color='#FD831C' size='2x' />
                  <p className='info-fale-conosco-full'>85 9783-3091</p>
                </Flex>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:10}}>
                  <FontAwesomeIcon icon={faEnvelope} color='#FD831C' size='2x'  />
                  <p className='info-fale-conosco-full'>boladepeloprotetores@gmail.com</p>
                </Flex>
                <Flex vertical={false} align='center' justify='center' gap={20} style={{marginTop:10}}>
                  <FontAwesomeIcon icon={faInstagram} color='#FD831C' size='2x'  />
                  <a href='https://www.instagram.com/boladepelo_sapiranga?igsh=MXU5NWZxN2dmMWx6eg==' className='info-fale-conosco-full'>Bola de Pelo</a>
                </Flex>
              </Flex>
              <Flex vertical={true} align='flex-start' justify='flex-start' gap={10}>
                <Input placeholder="Nome" style={{width:"70vw"}} size='large' onChange={(e) => setNome(e.target.value)} />
                <Input placeholder="Telefone" style={{width:"70vw"}} size='large' onChange={(e) => setTelefone(e.target.value)} />
                <TextArea rows={4} placeholder="Mensagem" maxLength={250} onChange={(e) => setDescricao(e.target.value)} />
                <Button type='primary' className='botao-fale-conosco' onClick={() => enviarmensagem('fale conosco')}>
                  <Flex vertical={false} align={"center"} justify={"center"} gap={20}>
                  <p className="texto-botao-fale-conosco">Enviar Mensagem</p>
                  </Flex>
                </Button>
              </Flex>
            </Flex>
          </Card>
          }

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
