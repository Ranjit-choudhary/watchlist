import React, { useState, useEffect } from "react";
import { posterUrl } from "../services/tmdb";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableBucketItem({ item, index, onRemoveFromBucket, onItemClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : "auto",
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={`bucket-item ${isDragging ? "dragging" : ""}`} onClick={() => onItemClick(item)}>
      <div className="bucket-item-drag-handle" {...attributes} {...listeners} onClick={e => e.stopPropagation()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="19" r="1"></circle>
          <circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="19" r="1"></circle>
        </svg>
      </div>
      <div className="bucket-item-poster">
        {item.poster_path ? (
          <img src={posterUrl(item.poster_path, "w92")} alt={item.title} />
        ) : item.poster ? (
          <img src={item.poster} alt={item.title} />
        ) : (
          <div className="bucket-item-no-poster">No Image</div>
        )}
        {index === 0 && <span className="bucket-item-top-badge">NEXT</span>}
      </div>
      <div className="bucket-item-info">
        <h3 className="bucket-item-title">{item.title}</h3>
        <div className="bucket-item-meta">
          <span className={`bucket-item-type ${item.type === "tv" ? "type-tv" : "type-movie"}`}>
            {item.type === "tv" ? "TV Series" : "Movie"}
          </span>
          {item.type === "tv" && item.lastInfo && (
            <span className="bucket-item-last-info">({item.lastInfo})</span>
          )}
        </div>
      </div>
      <button 
        className="bucket-item-remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemoveFromBucket(item.id);
        }}
        title="Remove from Stack"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
        </svg>
      </button>
    </div>
  );
}

export default function BucketPanel({ 
  items, 
  isOpen, 
  onToggle, 
  onRemoveFromBucket,
  onItemClick,
  onReorderBucket
}) {
  const [localBucketItems, setLocalBucketItems] = useState([]);

  useEffect(() => {
    const sorted = [...items]
      .filter(item => item.addedToBucketAt)
      .sort((a, b) => b.addedToBucketAt - a.addedToBucketAt);
    setLocalBucketItems(sorted);
  }, [items]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = localBucketItems.findIndex((i) => i.id === active.id);
      const newIndex = localBucketItems.findIndex((i) => i.id === over.id);
      
      const newItems = arrayMove(localBucketItems, oldIndex, newIndex);
      setLocalBucketItems(newItems);
      
      if (onReorderBucket) {
        onReorderBucket(newItems);
      }
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) at bottom right */}
      {!isOpen && (
        <button className="bucket-fab" onClick={onToggle} title="Open Watch Next Stack">
          🪣
          {localBucketItems.length > 0 && (
            <span className="bucket-fab-badge">{localBucketItems.length}</span>
          )}
        </button>
      )}

      {/* Floating Panel */}
      <div className={`bucket-floating-panel ${isOpen ? "open" : ""}`}>
        <div className="bucket-header">
          <div className="bucket-title-group">
            <span className="bucket-icon">🪣</span>
            <h2 className="bucket-title">Up Next Stack</h2>
            <span className="bucket-count">{localBucketItems.length}</span>
          </div>
          <button className="bucket-close-btn" onClick={onToggle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="bucket-content">
          {localBucketItems.length === 0 ? (
            <div className="bucket-empty">
              <span className="bucket-empty-icon">📂</span>
              <p>Your stack is empty.</p>
              <span className="bucket-empty-sub">Add movies or series to keep track of what to watch next!</span>
            </div>
          ) : (
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext 
                items={localBucketItems.map(i => i.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="bucket-list">
                  {localBucketItems.map((item, index) => (
                    <SortableBucketItem 
                      key={item.id} 
                      item={item} 
                      index={index}
                      onRemoveFromBucket={onRemoveFromBucket}
                      onItemClick={onItemClick}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>
      </div>
    </>
  );
}
