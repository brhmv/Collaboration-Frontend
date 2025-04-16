export const variants = {
    container: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
}