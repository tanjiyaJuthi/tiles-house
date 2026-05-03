export async function getSiteData(domain) {
    return {
        name: domain || 'Unknown Site',
    };
}