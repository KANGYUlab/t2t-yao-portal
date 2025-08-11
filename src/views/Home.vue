<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-particles"></div>
        <div class="floating-elements">
          <div class="floating-element" style="--delay: 0s; --x: 10%; --y: 20%;">🧬</div>
          <div class="floating-element" style="--delay: 2s; --x: 85%; --y: 30%;">⚛️</div>
          <div class="floating-element" style="--delay: 4s; --x: 20%; --y: 70%;">🔬</div>
          <div class="floating-element" style="--delay: 6s; --x: 75%; --y: 80%;">🧪</div>
        </div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <i class="fas fa-star"></i>
            <span>Current Release v2.0</span>
          </div>
          <h1 class="hero-title">
            <span class="hero-icon">🧬</span>
            T2T-YAO Genome
          </h1>
          <h2 class="hero-subtitle">High-Quality Telomere-to-Telomere Reference Genome</h2>
          <p class="hero-description">
            T2T-YAO v2.0 delivers the first near-perfect Telomere-to-Telomere (T2T) Chinese reference 
            genome with infinite QV by k-mer standards and comprehensive coverage of all 46 chromosomes.
          </p>
          <div class="hero-actions">
            <router-link to="/downloads" class="btn btn-primary">
              <i class="fas fa-download"></i>
              Download Now
            </router-link>
            <a href="#overview" class="btn btn-secondary">
              <i class="fas fa-info-circle"></i>
              Learn More
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="genome-image-container">
            <img src="@/assets/genome-illustration.png" alt="T2T-YAO Genome Illustration" class="genome-image">
            <div class="image-overlay">
              <div class="floating-particle"></div>
              <div class="floating-particle"></div>
              <div class="floating-particle"></div>
              <div class="floating-particle"></div>
            </div>
          </div>
          <div class="genome-stats">
            <div class="stat-bubble">
              <span class="stat-number">100%</span>
              <span class="stat-label">Coverage</span>
            </div>
            <div class="stat-bubble">
              <span class="stat-number">QV<sub class="qv-subscript">21mer</sub><br>inf</span>
              <span class="stat-label">Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section id="overview" class="overview-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Project Overview</h2>
          <p class="section-subtitle">Significant advances in human genomics</p>
        </div>
        <div class="overview-content">
          <div class="overview-text">
            <div class="overview-badge">
              <i class="fas fa-award"></i>
              <span>Important Achievement</span>
            </div>
            <h3>What is T2T-YAO?</h3>
            <p>
              The T2T-YAO project creates the first near-perfect Telomere-to-Telomere (T2T) Chinese 
              reference genome. Named after the sampling site near Emperor Yao's ancient Tang State, 
              this assembly achieves comprehensive coverage of all 46 chromosomes with infinite QV by 
              k-mer standards.
            </p>
            <h3>Why It Matters</h3>
            <p>
              For the first time in 34 years of human genomics research, Chinese researchers have their own 
              high-quality reference genome. This reduces reliance on European reference genomes that may not 
              fully represent non-European ancestry, improving genetic variant interpretation for Chinese 
              and Asian populations.
            </p>
            <div class="feature-list">
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>First near-perfect T2T Chinese reference genome</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>High-quality diploid assembly (QV<sub class="qv-subscript">21mer</sub> inf)</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>High accuracy in haplotype separation</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>Comprehensive coverage of all 46 chromosomes</span>
              </div>
            </div>
          </div>
          <div class="overview-image">
            <div class="genome-visualization">
              <div class="chromosome"></div>
              <div class="chromosome"></div>
              <div class="chromosome"></div>
              <div class="chromosome"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloads Section (added back to Home) -->
    <section class="downloads-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Genome Assembly Releases</h2>
          <p class="section-subtitle">Choose the version that best fits your research requirements</p>
        </div>
        
        <div class="releases-timeline">
          <div class="release-card featured">
            <div class="release-badge">Current</div>
            <div class="release-header">
              <div class="release-info">
                <h3 class="release-title">T2T-YAO v2.0</h3>
                <p class="release-date">Released: August 2025</p>
                <p class="release-description">
                  T2T-YAO v2.0 delivers the first high-quality Telomere-to-Telomere (T2T) Chinese reference 
                  genome with infinite QV by k-mer standards and comprehensive coverage of all 46 chromosomes.
                </p>
              </div>
              <div class="release-metrics">
                <div class="metric">
                  <span class="metric-value">6.04 GB</span>
                  <span class="metric-label">Size</span>
                </div>
                <div class="metric">
                  <span class="metric-value">QV<sub class="qv-subscript">21mer</sub><br>inf</span>
                  <span class="metric-label">Quality</span>
                </div>
                <div class="metric">
                  <span class="metric-value">100%</span>
                  <span class="metric-label">Coverage</span>
                </div>
              </div>
            </div>
            <div class="release-downloads">
              <h4>Download Options</h4>
              <div class="download-grid">
                <a href="/downloads/YAOv2.0.diploid.fasta.gz" class="download-item primary">
                  <div class="download-icon">
                    <i class="fas fa-file-archive"></i>
                  </div>
                  <div class="download-info">
                    <div class="download-name">Complete Genome (FASTA)</div>
                    <div class="download-meta">Compressed • 1.6 GB</div>
                  </div>
                  <div class="download-action">
                    <i class="fas fa-download"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="release-card">
            <div class="release-badge legacy">Legacy</div>
            <div class="release-header">
              <div class="release-info">
                <h3 class="release-title">T2T-YAO v1.1</h3>
                <p class="release-date">Released: December 2023</p>
                <p class="release-description">
                  T2T-YAO v1.1 is an early developmental version with a Merqury-estimated QV of 68.68. 
                  While historically significant, it is now substantially outperformed by v2.0 in most 
                  quality metrics.
                </p>
              </div>
              <div class="release-metrics">
                <div class="metric">
                  <span class="metric-value">5.98 GB</span>
                  <span class="metric-label">Size</span>
                </div>
                <div class="metric">
                  <span class="metric-value">QV<sub class="qv-subscript">21mer</sub><br>68.68</span>
                  <span class="metric-label">Quality</span>
                </div>
                <div class="metric">
                  <span class="metric-value">99.84%</span>
                  <span class="metric-label">Coverage</span>
                </div>
              </div>
            </div>
            <div class="release-downloads">
              <h4>Download Options</h4>
              <div class="download-grid">
                <a href="/downloads/YAOv1.1.diploid.fasta.gz" class="download-item primary">
                  <div class="download-icon">
                    <i class="fas fa-file-archive"></i>
                  </div>
                  <div class="download-info">
                    <div class="download-name">Complete Genome (FASTA)</div>
                    <div class="download-meta">Compressed • 1.6 GB</div>
                  </div>
                  <div class="download-action">
                    <i class="fas fa-download"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info (Citation) -->
    <section class="info-section">
      <div class="container">
        <div class="citation-container">
          <div class="info-card citation-card">
            <div class="info-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Citation</h3>
            <p>Please cite the following publications:</p>
            <ul class="citation-list">
              <li><strong>T2T-YAO: A Telomere-to-telomere Assembled Diploid Reference Genome for Han Chinese</strong> <em>Genomics, Proteomics & Bioinformatics</em>, 2023. DOI: <a href="https://doi.org/10.1016/j.gpb.2023.08.001" target="_blank">10.1016/j.gpb.2023.08.001</a></li>
              <li><strong>Approaching an Error-Free Diploid Human Genome</strong> <em>bioRxiv</em>, 2025. DOI: <a href="https://doi.org/10.1101/2025.08.01.667781" target="_blank">10.1101/2025.08.01.667781</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script> 