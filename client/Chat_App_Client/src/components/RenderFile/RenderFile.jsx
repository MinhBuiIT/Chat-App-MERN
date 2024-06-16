import FileIcon from '@mui/icons-material/AttachFile';

const RenderFile = ({ url, type, style }) => {
  switch (type) {
    case 'image':
      return <img src={url} style={{ ...style, borderRadius: '10px' }} />;
    case 'video':
      return <video src={url} style={style} preload="none" controls />;
    case 'audio':
      return <audio controls preload="none" src={url}></audio>;
    default:
      return <FileIcon />;
  }
};

export default RenderFile;
