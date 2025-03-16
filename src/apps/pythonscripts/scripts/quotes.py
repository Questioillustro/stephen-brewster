import pygame
import random
import math

# Initialize Pygame
pygame.init()
screen = pygame.display.set_mode((700, 500), pygame.RESIZABLE)
pygame.display.set_caption("Stoic Quotes")
clock = pygame.time.Clock()

# Print Pygame version
print("Pygame version:", pygame.__version__)

# Book content: [quote, attribution, placeholder_color]
book_pages = [
    ["You have power over your mind - not outside events. Realize this, and you will find strength.", "- Marcus Aurelius", (200, 200, 220)],
    ["What need is there to weep over parts of life? The whole of it calls for tears.", "- Seneca", (180, 200, 180)],
    ["The best revenge is to be unlike him who performed the injury.", "- Marcus Aurelius", (220, 200, 180)],
    ["If it is not right, do not do it; if it is not true, do not say it.", "- Marcus Aurelius", (200, 180, 220)],
    ["Waste no more time arguing about what a good man should be. Be one.", "- Marcus Aurelius", (210, 190, 230)],
    ["Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", "- Marcus Aurelius", (190, 210, 190)],
    ["We suffer more often in imagination than in reality.", "- Seneca", (230, 200, 180)],
    ["He who fears death will never do anything worthy of a man who is alive.", "- Seneca", (180, 190, 220)],
    ["The happiness of your life depends upon the quality of your thoughts.", "- Marcus Aurelius", (200, 220, 200)],
    ["Difficulties strengthen the mind, as labor does the body.", "- Seneca", (220, 180, 200)],
    ["It is not that we have a short time to live, but that we waste a lot of it.", "- Seneca", (195, 205, 215)],
    ["Dwell on the beauty of life. Watch the stars, and see yourself running with them.", "- Marcus Aurelius", (225, 195, 205)],
    ["Luck is what happens when preparation meets opportunity.", "- Seneca", (185, 215, 195)],
    ["Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", "- Marcus Aurelius", (215, 185, 225)],
    ["No person has the power to have everything they want, but it is in their power not to want what they don’t have.", "- Seneca", (205, 225, 185)],
    ["Accept the things to which fate binds you, and love the people with whom fate brings you together.", "- Marcus Aurelius", (195, 185, 230)],
    ["Life is neither good nor evil, but only a place for good and evil.", "- Marcus Aurelius", (230, 205, 190)],
    ["While we are postponing, life speeds by.", "- Seneca", (190, 220, 210)],
    ["To be everywhere is to be nowhere.", "- Seneca", (220, 190, 215)],
    ["The whole future lies in uncertainty: live immediately.", "- Seneca", (210, 215, 200)],
    ["Begin at once to live, and count each separate day as a separate life.", "- Seneca", (200, 195, 225)],
    ["He who is brave is free.", "- Seneca", (185, 205, 220)],
    ["It does not matter what you bear, but how you bear it.", "- Seneca", (225, 200, 195)],
    ["Receive without pride, let go without attachment.", "- Marcus Aurelius", (210, 225, 190)],
    ["There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.", "- Seneca", (195, 215, 205)],
    ["Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.", "- Marcus Aurelius", (220, 185, 230)],
    ["Each day provides its own gifts.", "- Marcus Aurelius", (205, 220, 195)],
    ["Associate with people who are likely to improve you.", "- Seneca", (230, 190, 210)],
    ["You could leave life right now. Let that determine what you do and say and think.", "- Marcus Aurelius", (190, 205, 225)],
    ["A man’s worth is no greater than the worth of his ambitions.", "- Marcus Aurelius", (215, 200, 220)],
    ["As is a tale, so is life: not how long it is, but how good it is, is what matters.", "- Seneca", (200, 210, 230)],
    ["How much more grievous are the consequences of anger than the causes of it.", "- Marcus Aurelius", (225, 195, 215)],
    ["Wealth consists not in having great possessions, but in having few wants.", "- Seneca", (185, 225, 200)],
    ["Let us prepare our minds as if we’d come to the very end of life.", "- Seneca", (210, 190, 225)],
    ["That which is not good for the swarm, neither is it good for the bee.", "- Marcus Aurelius", (195, 220, 215)],
    ["Nothing, to my way of thinking, is a better proof of a well-ordered mind than a man’s ability to stop just where he is and pass some time in his own company.", "- Seneca", (230, 205, 185)],
    ["Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature.", "- Marcus Aurelius", (205, 195, 230)],
    ["Throw me to the wolves and I will return leading the pack.", "- Seneca", (220, 210, 195)],
    ["Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.", "- Marcus Aurelius", (190, 225, 205)],
    ["People are frugal in guarding their personal property; but as soon as it comes to squandering time they are most wasteful of the one thing in which it is right to be stingy.", "- Seneca", (215, 185, 220)],
    ["Focus condenses chaos to will as I forge a world anew.", "- Grok & Brewster", (210, 200, 225)],
]
current_page = random.randint(0, len(book_pages) - 1)

# Font setup
quote_font = pygame.font.Font(None, 34)
attrib_font = pygame.font.Font(None, 50)

# Layout setup (tight border)
margin = 20
quote_rect = pygame.Rect(100, 90, 500, 320)
left_button = pygame.Rect(margin, 90, 80, 320)
right_button = pygame.Rect(600, 90, 80, 320)  # Moved left to 600, flush with quote_rect

# Add this after font setup
title_font = pygame.font.Font(None, 40)

# In the main loop, after drawing the background but before the quote rectangle:
title_text = title_font.render("Stoic Wisdom", True, (50, 50, 50))
screen.blit(title_text, (quote_rect.x + (quote_rect.width - title_text.get_width()) // 2, 50))  # Centered above quote_rect

# Animation setup for nebulous effect
particles = []
for _ in range(20):
    particles.append({
        "x": random.randint(quote_rect.x, quote_rect.x + quote_rect.width),
        "y": random.randint(quote_rect.y, quote_rect.y + quote_rect.height),
        "vx": random.uniform(-0.1, 0.1),
        "vy": random.uniform(-0.1, 0.1),
        "size": random.randint(20, 40),
        "alpha": random.randint(50, 100)
    })

# Function to wrap text
def wrap_text(text, font, max_width):
    words = text.split(" ")
    lines = []
    current_line = []
    current_width = 0

    for word in words:
        word_surface = font.render(word, True, (0, 0, 0))
        word_width = word_surface.get_width()

        if current_width + word_width <= max_width:
            current_line.append(word)
            current_width += word_width + font.size(" ")[0]
        else:
            lines.append(" ".join(current_line))
            current_line = [word]
            current_width = word_width + font.size(" ")[0]

    if current_line:
        lines.append(" ".join(current_line))
    return lines

# Function to draw gradient rectangle
def draw_gradient_rect(surface, rect, color_top, color_bottom):
    for y in range(rect.height):
        alpha = y / rect.height
        color = tuple(int(color_top[i] * (1 - alpha) + color_bottom[i] * alpha) for i in range(3))
        pygame.draw.line(surface, color, (rect.x, rect.y + y), (rect.x + rect.width, rect.y + y))

# Main loop
running = True
mouse_pos = (0, 0)
time = 0
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.VIDEORESIZE:
            screen = pygame.display_set_mode((event.w, event.h), pygame.RESIZABLE)
            quote_rect.width = event.w - 200
            quote_rect.topleft = (100, 90)
            left_button.topleft = (margin, 90)
            left_button.height = quote_rect.height
            right_button.topleft = (quote_rect.right, 90)  # Align left edge to quote_rect's right
            right_button.height = quote_rect.height
            for p in particles:
                p["x"] = random.randint(quote_rect.x, quote_rect.x + quote_rect.width)
                p["y"] = random.randint(quote_rect.y, quote_rect.y + quote_rect.height)
        elif event.type == pygame.MOUSEMOTION:
            mouse_pos = event.pos
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if left_button.collidepoint(event.pos) or right_button.collidepoint(event.pos):
                new_page = random.randint(0, len(book_pages) - 1)
                while new_page == current_page:
                    new_page = random.randint(0, len(book_pages) - 1)
                current_page = new_page

    # Draw parchment background
    screen.fill((245, 235, 210))
    for _ in range(1000):
        x, y = random.randint(0, screen.get_width()), random.randint(0, screen.get_height())
        pygame.draw.circle(screen, (random.randint(200, 245), random.randint(190, 235), random.randint(180, 210)), (x, y), 1)

    # Draw quote rectangle with shadow and gradient
    shadow_rect = quote_rect.move(5, 5)
    pygame.draw.rect(screen, (100, 100, 100, 100), shadow_rect, border_radius=10)
    draw_gradient_rect(screen, quote_rect, tuple(c + 20 for c in book_pages[current_page][2]), book_pages[current_page][2])

    # Animate nebulous background
    for p in particles:
        p["x"] += p["vx"] + math.sin(time * 0.05 + p["y"] * 0.01) * 0.05
        p["y"] += p["vy"] + math.cos(time * 0.05 + p["x"] * 0.01) * 0.05
        if p["x"] < quote_rect.x: p["x"], p["vx"] = quote_rect.x, -p["vx"]
        if p["x"] > quote_rect.x + quote_rect.width: p["x"], p["vx"] = quote_rect.x + quote_rect.width, -p["vx"]
        if p["y"] < quote_rect.y: p["y"], p["vy"] = quote_rect.y, -p["vy"]
        if p["y"] > quote_rect.y + quote_rect.height: p["y"], p["vy"] = quote_rect.y + quote_rect.height, -p["vy"]
        pygame.draw.circle(screen, (*book_pages[current_page][2], p["alpha"]), (int(p["x"]), int(p["y"])), p["size"], 0)

    pygame.draw.rect(screen, (150, 150, 150), quote_rect, 2, border_radius=10)

    # Draw wrapped quote
    max_text_width = quote_rect.width - 40
    wrapped_lines = wrap_text(book_pages[current_page][0], quote_font, max_text_width)
    for i, line in enumerate(wrapped_lines):
        quote_text = quote_font.render(line, True, (20, 20, 20))
        screen.blit(quote_text, (quote_rect.x + 20, quote_rect.y + 20 + i * 40))

    # Draw attribution
    attrib_y = quote_rect.y + 20 + len(wrapped_lines) * 40 + 20
    attrib_text = attrib_font.render(book_pages[current_page][1], True, (20, 20, 20))
    screen.blit(attrib_text, (quote_rect.x + 20, attrib_y))

    # Draw buttons with arrows and hover
    for btn, direction in [(left_button, "left"), (right_button, "right")]:
        pygame.draw.rect(screen, (150, 150, 150), btn.move(3, 3), border_radius=5)
        btn_color = (220, 220, 220) if btn.collidepoint(mouse_pos) else (200, 200, 200)
        pygame.draw.rect(screen, btn_color, btn, border_radius=5)
        pygame.draw.rect(screen, (100, 100, 100), btn, 2, border_radius=5)
        mid_y = btn.y + btn.height // 2
        if direction == "left":
            points = [(btn.x + 50, mid_y - 20), (btn.x + 30, mid_y), (btn.x + 50, mid_y + 20)]
        else:
            points = [(btn.x + 30, mid_y - 20), (btn.x + 50, mid_y), (btn.x + 30, mid_y + 20)]
        pygame.draw.polygon(screen, (20, 20, 20), points)

    pygame.display.flip()
    clock.tick(60)
    time += 1

pygame.quit()