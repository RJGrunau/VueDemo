export default async (({store}) => {
    await store.dipatch("getGithubProjects")
})