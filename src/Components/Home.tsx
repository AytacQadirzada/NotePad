import { useEffect, useState } from 'react';
import useStyles from '../Style/HomeStyle';
import search from '../assets/search.svg';

const Home = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [notes, setNotes] = useState<{ id: number; title: string; text: string; color: string }[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const colors = ['#C04F75', '#AE61BB', '#69AED2', '#CEAC40', '#8FAD6D'];

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleSave = () => {
    if (!title.trim() || !text.trim()) {
      alert('Zəhmət olmasa, həm başlıq, həm də mətn daxil edin!');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      text,
      color: selectedColor || '#C04F75',
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setTitle('');
    setText('');
    setSelectedColor('');
  };

  const handleDelete = (id: number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    localStorage.setItem('notes', JSON.stringify(filteredNotes));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    note.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <input
          className={classes.input}
          placeholder='Title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className={classes.textarea}
          placeholder='Text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className={classes.buttons}>
          <div className={classes.colorButtons}>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  backgroundColor: color,
                  border: color,
                  position: 'relative',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
              >
                {selectedColor === color && (
                  <span style={{fontWeight:'bold'}}>
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className={classes.saveButton}>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>

        <div className={classes.search}>
          <input
            type="text"
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img src={search} alt="search" />
        </div>

        <div className={classes.listContainer}>
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={classes.list}
              style={{ border: `2px dashed ${note.color}` }}
            >
              <div
                className={classes.listHeader}
                style={{ backgroundColor: note.color, color: '#fff' }}
              >
                <div>{note.title}</div>
                <div style={{ cursor: 'pointer' }} onClick={() => handleDelete(note.id)}>🗑️</div>
              </div>
              <div className={classes.listBody}>{note.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
