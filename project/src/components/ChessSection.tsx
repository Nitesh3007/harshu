import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight as ChessKnight } from 'lucide-react';

type ChessPiece = {
  id: string;
  symbol: string;
  position: number;
};

const initialPieces: ChessPiece[] = [
  { id: 'wq', symbol: '♕', position: 3 }, // White Queen
  { id: 'wk', symbol: '♔', position: 4 }, // White King
  { id: 'bq', symbol: '♛', position: 59 }, // Black Queen
  { id: 'bk', symbol: '♚', position: 60 }, // Black King
  { id: 'wn1', symbol: '♘', position: 1 }, // White Knight
  { id: 'wn2', symbol: '♘', position: 6 }, // White Knight
  { id: 'bn1', symbol: '♞', position: 57 }, // Black Knight
  { id: 'bn2', symbol: '♞', position: 62 }, // Black Knight
];

const ChessSection: React.FC = () => {
  const [pieces, setPieces] = useState<ChessPiece[]>(initialPieces);
  const [selectedPiece, setSelectedPiece] = useState<ChessPiece | null>(null);
  const [message, setMessage] = useState<string>('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSquareClick = (index: number) => {
    if (selectedPiece) {
      // Move the piece
      setPieces(pieces.map(piece => 
        piece.id === selectedPiece.id ? { ...piece, position: index } : piece
      ));
      
      // Special message for the queen's checkmate position
      if (selectedPiece.id === 'wq' && [58, 59, 60].includes(index)) {
        setMessage('Checkmate! Just like you won my heart ❤️');
      } else if (selectedPiece.symbol === '♘' || selectedPiece.symbol === '♞') {
        setMessage('Great knight move! Chess masters like you make smart moves in life too!');
      } else {
        setMessage('');
      }
      
      setSelectedPiece(null);
    } else {
      // Select the piece
      const pieceAtPosition = pieces.find(piece => piece.position === index);
      if (pieceAtPosition) {
        setSelectedPiece(pieceAtPosition);
      }
    }
  };

  const renderBoard = () => {
    const squares = [];
    
    for (let i = 0; i < 64; i++) {
      const row = Math.floor(i / 8);
      const col = i % 8;
      const isWhite = (row + col) % 2 === 0;
      const piece = pieces.find(p => p.position === i);
      
      squares.push(
        <div 
          key={i}
          className={`chessboard-square ${isWhite ? 'white' : 'black'} ${
            selectedPiece && selectedPiece.position === i ? 'border-2 border-yellow-400' : ''
          }`}
          onClick={() => handleSquareClick(i)}
        >
          {piece && (
            <span className="chess-piece" style={{ fontSize: '28px' }}>
              {piece.symbol}
            </span>
          )}
        </div>
      );
    }
    
    return squares;
  };

  return (
    <section 
      id="chess" 
      className="py-20 bg-gradient-to-b from-white to-lavender-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <ChessKnight className="w-6 h-6 text-lavender-700 mr-2" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Chess Queen
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            For the chess master who always makes the right moves. Try moving some pieces!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="chessboard mb-6">
            {renderBoard()}
          </div>
          
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg text-lavender-700 font-medium mt-2"
            >
              {message}
            </motion.p>
          )}

          <p className="text-gray-600 mt-4 max-w-md text-center">
            {selectedPiece 
              ? 'Now click on a square to move the piece' 
              : 'Click on a piece to select it, then click on a square to move it'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChessSection;