import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
} from 'react-icons/io5'
import Footer from '../components/footer'

const Page = () => {
  return (
    <Layout>
      <Container bg="dark">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          textAlign="center"
        >
          Oi, Sou Programador FullStack!{' '}
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
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.600"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/pp.jpg"
              alt="Profile picture"
            ></Image>
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Sobre mim
          </Heading>
          <Paragraph>
            João é um freelance e FullStack dev com experiencia em React, Node,
            Angular e Java estando estabelecido em Campina Grande - PB, Brasil .
            Atualmente no quarto ano de Ciências da Computação pela Universidade
            Estadual da Paraíba(UEPB). Quando não está online esta passeando com
            seus cachorros.  &nbsp;
            <Link
              href="/download/Joao_Damiao_CV_EN.pdf"
              download="Joao-Damiao-Jr_CV.pdf"
              type="application/pdf"
            >
              Baixe meu currículo!
            </Link>
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Redes Sociais
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/thejoaodamiao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Thejoaodamiao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/thejoaodamiao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @Thejoaodamiao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/joão-damião-jr-4191111b0/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Thejoaodamiao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:thejoaodamiao@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGoogle} />}
                >
                  thejoaodamiao@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section>
          <Footer />
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../libs/chakra'
