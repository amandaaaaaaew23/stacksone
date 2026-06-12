;; Config updated 2026-06-12T14:07:22Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u28)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
