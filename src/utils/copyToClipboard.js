const copyToClipboard = (valueToCopy) => {
    return navigator.clipboard.writeText(valueToCopy)
}

export default copyToClipboard;