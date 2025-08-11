<template>
  <div class="downloads">
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
                <a href="https://github.com/KANGYUlab/t2t-yao-portal/releases/download/v2.0/YAOv2.0.diploid.fasta.gz" class="download-item primary">
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
                <a href="https://github.com/KANGYUlab/t2t-yao-portal/releases/download/v1.1/YAOv1.1.diploid.fasta.gz" class="download-item primary">
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

    <!-- Additional Info -->
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
  name: 'Downloads'
}
</script> 