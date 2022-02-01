import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          InkDrop <Badge>2022</Badge>
        </Title>
        <P>
          A Markdown note-taking app with 100+ plugins A Markdown note-taking
          app with 100+ pluginsA Markdown note-taking app with 100+ plugins
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nodejs, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogspot</Meta>
            <Link href="https://www.inkdrop.app/">
              A Markdown note-taking app with 100+ plugins A Markdown
              note-taking app with 100+ pluginsA Markdown note-taking app with
              100+ plugins
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/inkdrop_01.png" alt="inkdrop" />
      </Container>
    </Layout>
  )
}

export default Work
