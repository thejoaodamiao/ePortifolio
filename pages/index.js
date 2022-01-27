import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container bg="dark">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        algign="center"
      >
        Oi, Sou Programador Front-end!{' '}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            João Damião Jr
          </Heading>
          <p>Developer / Designer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.600"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/pp.jpg"
          ></Image>
        </Box>
      </Box>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sobre mim
        </Heading>
        <Paragraph>
          João é um freelance e Front-end dev com experiencia em React, Node,
          Angular e Java estando estabelecido em Campina Grande - PB, Brasil .
          Atualmente no quarto ano de Ciências da Computação pela Universidade
          Estadual da Paraíba(UEPB). Quando não está online esta passeando com
          seus cachorros.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu Portifolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Nascido em Alagoa Grande, Paraíba.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Entrou no Curso de Ciências da Computação na UEPB.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Orientado no laboratorio de usabilidade e fatores humanos (LUFH -
          NUTES).
        </BioSection>
        <BioSection>
          <BioYear>2021 até o presente</BioYear>
          Meio periodo na empresa Knex Jr.
        </BioSection>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Eu ♥
        </Heading>
        <Paragraph>Arte, Musica, Games e filmes.</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
