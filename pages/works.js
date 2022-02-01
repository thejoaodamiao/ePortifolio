import { Container, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailInkDrop from '../public/images/inkdrop_01.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Atividade
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbnailInkDrop}
            >
              A markdown note-taking app A markdown note-taking app A markdown
              note-taking app A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbnailInkDrop}
            >
              A markdown note-taking app A markdown note-taking app A markdown
              note-taking app A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbnailInkDrop}
            >
              A markdown note-taking app A markdown note-taking app A markdown
              note-taking app A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbnailInkDrop}
            >
              A markdown note-taking app A markdown note-taking app A markdown
              note-taking app A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbnailInkDrop}
            >
              A markdown note-taking app A markdown note-taking app A markdown
              note-taking app A markdown note-taking app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../libs/chakra'
