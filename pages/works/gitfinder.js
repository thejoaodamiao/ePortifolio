import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Git Finder">
      <Container>
        <Title>
          Git Finder <Badge>202</Badge>
        </Title>
        <P>
         App Reactjs utlizando pelo vite de busca de usuarios github consumindo a api do github.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>website</Meta>
            <Link href="https://github.com/thejoaodamiao/GitFinder">
            https://github.com/thejoaodamiao/GitFinder <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Reactjs</span>
          </ListItem>
          {/* <ListItem>
            <Meta>Blogspot</Meta>
            <Link href="https://github.com/thejoaodamiao/GitFinder">
              A Markdown note-taking app with 100+ plugins A Markdown
              note-taking app with 100+ pluginsA Markdown note-taking app with
              100+ plugins
            </Link>
          </ListItem> */}
        </List>
        <WorkImage src="/images/git_finder.png" alt="gitfinder" />
      </Container>
    </Layout>
  )
}

export default Work
